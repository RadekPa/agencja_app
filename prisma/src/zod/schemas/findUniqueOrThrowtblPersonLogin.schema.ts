import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblPersonLoginSelectObjectSchema as tblPersonLoginSelectObjectSchema } from './objects/tblPersonLoginSelect.schema';
import { tblPersonLoginWhereUniqueInputObjectSchema as tblPersonLoginWhereUniqueInputObjectSchema } from './objects/tblPersonLoginWhereUniqueInput.schema';

export const tblPersonLoginFindUniqueOrThrowSchema: z.ZodType<Prisma.tblPersonLoginFindUniqueOrThrowArgs> = z.object({ select: tblPersonLoginSelectObjectSchema.optional(),  where: tblPersonLoginWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblPersonLoginFindUniqueOrThrowArgs>;

export const tblPersonLoginFindUniqueOrThrowZodSchema = z.object({ select: tblPersonLoginSelectObjectSchema.optional(),  where: tblPersonLoginWhereUniqueInputObjectSchema }).strict();