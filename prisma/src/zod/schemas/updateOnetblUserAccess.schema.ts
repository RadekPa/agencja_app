import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblUserAccessSelectObjectSchema as tblUserAccessSelectObjectSchema } from './objects/tblUserAccessSelect.schema';
import { tblUserAccessIncludeObjectSchema as tblUserAccessIncludeObjectSchema } from './objects/tblUserAccessInclude.schema';
import { tblUserAccessUpdateInputObjectSchema as tblUserAccessUpdateInputObjectSchema } from './objects/tblUserAccessUpdateInput.schema';
import { tblUserAccessUncheckedUpdateInputObjectSchema as tblUserAccessUncheckedUpdateInputObjectSchema } from './objects/tblUserAccessUncheckedUpdateInput.schema';
import { tblUserAccessWhereUniqueInputObjectSchema as tblUserAccessWhereUniqueInputObjectSchema } from './objects/tblUserAccessWhereUniqueInput.schema';

export const tblUserAccessUpdateOneSchema: z.ZodType<Prisma.tblUserAccessUpdateArgs> = z.object({ select: tblUserAccessSelectObjectSchema.optional(), include: tblUserAccessIncludeObjectSchema.optional(), data: z.union([tblUserAccessUpdateInputObjectSchema, tblUserAccessUncheckedUpdateInputObjectSchema]), where: tblUserAccessWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblUserAccessUpdateArgs>;

export const tblUserAccessUpdateOneZodSchema = z.object({ select: tblUserAccessSelectObjectSchema.optional(), include: tblUserAccessIncludeObjectSchema.optional(), data: z.union([tblUserAccessUpdateInputObjectSchema, tblUserAccessUncheckedUpdateInputObjectSchema]), where: tblUserAccessWhereUniqueInputObjectSchema }).strict();