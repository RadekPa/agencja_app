import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblPersonSelectObjectSchema as tblPersonSelectObjectSchema } from './objects/tblPersonSelect.schema';
import { tblPersonWhereUniqueInputObjectSchema as tblPersonWhereUniqueInputObjectSchema } from './objects/tblPersonWhereUniqueInput.schema';

export const tblPersonFindUniqueOrThrowSchema: z.ZodType<Prisma.tblPersonFindUniqueOrThrowArgs> = z.object({ select: tblPersonSelectObjectSchema.optional(),  where: tblPersonWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblPersonFindUniqueOrThrowArgs>;

export const tblPersonFindUniqueOrThrowZodSchema = z.object({ select: tblPersonSelectObjectSchema.optional(),  where: tblPersonWhereUniqueInputObjectSchema }).strict();