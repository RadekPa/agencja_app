import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblUserAccessSelectObjectSchema as tblUserAccessSelectObjectSchema } from './objects/tblUserAccessSelect.schema';
import { tblUserAccessIncludeObjectSchema as tblUserAccessIncludeObjectSchema } from './objects/tblUserAccessInclude.schema';
import { tblUserAccessWhereUniqueInputObjectSchema as tblUserAccessWhereUniqueInputObjectSchema } from './objects/tblUserAccessWhereUniqueInput.schema';
import { tblUserAccessCreateInputObjectSchema as tblUserAccessCreateInputObjectSchema } from './objects/tblUserAccessCreateInput.schema';
import { tblUserAccessUncheckedCreateInputObjectSchema as tblUserAccessUncheckedCreateInputObjectSchema } from './objects/tblUserAccessUncheckedCreateInput.schema';
import { tblUserAccessUpdateInputObjectSchema as tblUserAccessUpdateInputObjectSchema } from './objects/tblUserAccessUpdateInput.schema';
import { tblUserAccessUncheckedUpdateInputObjectSchema as tblUserAccessUncheckedUpdateInputObjectSchema } from './objects/tblUserAccessUncheckedUpdateInput.schema';

export const tblUserAccessUpsertOneSchema: z.ZodType<Prisma.tblUserAccessUpsertArgs> = z.object({ select: tblUserAccessSelectObjectSchema.optional(), include: tblUserAccessIncludeObjectSchema.optional(), where: tblUserAccessWhereUniqueInputObjectSchema, create: z.union([ tblUserAccessCreateInputObjectSchema, tblUserAccessUncheckedCreateInputObjectSchema ]), update: z.union([ tblUserAccessUpdateInputObjectSchema, tblUserAccessUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.tblUserAccessUpsertArgs>;

export const tblUserAccessUpsertOneZodSchema = z.object({ select: tblUserAccessSelectObjectSchema.optional(), include: tblUserAccessIncludeObjectSchema.optional(), where: tblUserAccessWhereUniqueInputObjectSchema, create: z.union([ tblUserAccessCreateInputObjectSchema, tblUserAccessUncheckedCreateInputObjectSchema ]), update: z.union([ tblUserAccessUpdateInputObjectSchema, tblUserAccessUncheckedUpdateInputObjectSchema ]) }).strict();