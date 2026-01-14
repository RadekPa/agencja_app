import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblUserAccessSelectObjectSchema as tblUserAccessSelectObjectSchema } from './objects/tblUserAccessSelect.schema';
import { tblUserAccessIncludeObjectSchema as tblUserAccessIncludeObjectSchema } from './objects/tblUserAccessInclude.schema';
import { tblUserAccessWhereUniqueInputObjectSchema as tblUserAccessWhereUniqueInputObjectSchema } from './objects/tblUserAccessWhereUniqueInput.schema';

export const tblUserAccessFindUniqueOrThrowSchema: z.ZodType<Prisma.tblUserAccessFindUniqueOrThrowArgs> = z.object({ select: tblUserAccessSelectObjectSchema.optional(), include: tblUserAccessIncludeObjectSchema.optional(), where: tblUserAccessWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblUserAccessFindUniqueOrThrowArgs>;

export const tblUserAccessFindUniqueOrThrowZodSchema = z.object({ select: tblUserAccessSelectObjectSchema.optional(), include: tblUserAccessIncludeObjectSchema.optional(), where: tblUserAccessWhereUniqueInputObjectSchema }).strict();