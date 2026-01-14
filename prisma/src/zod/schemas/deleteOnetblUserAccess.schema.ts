import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblUserAccessSelectObjectSchema as tblUserAccessSelectObjectSchema } from './objects/tblUserAccessSelect.schema';
import { tblUserAccessIncludeObjectSchema as tblUserAccessIncludeObjectSchema } from './objects/tblUserAccessInclude.schema';
import { tblUserAccessWhereUniqueInputObjectSchema as tblUserAccessWhereUniqueInputObjectSchema } from './objects/tblUserAccessWhereUniqueInput.schema';

export const tblUserAccessDeleteOneSchema: z.ZodType<Prisma.tblUserAccessDeleteArgs> = z.object({ select: tblUserAccessSelectObjectSchema.optional(), include: tblUserAccessIncludeObjectSchema.optional(), where: tblUserAccessWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblUserAccessDeleteArgs>;

export const tblUserAccessDeleteOneZodSchema = z.object({ select: tblUserAccessSelectObjectSchema.optional(), include: tblUserAccessIncludeObjectSchema.optional(), where: tblUserAccessWhereUniqueInputObjectSchema }).strict();