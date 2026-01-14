import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblAuthorsSelectObjectSchema as tblAuthorsSelectObjectSchema } from './objects/tblAuthorsSelect.schema';
import { tblAuthorsIncludeObjectSchema as tblAuthorsIncludeObjectSchema } from './objects/tblAuthorsInclude.schema';
import { tblAuthorsWhereUniqueInputObjectSchema as tblAuthorsWhereUniqueInputObjectSchema } from './objects/tblAuthorsWhereUniqueInput.schema';
import { tblAuthorsCreateInputObjectSchema as tblAuthorsCreateInputObjectSchema } from './objects/tblAuthorsCreateInput.schema';
import { tblAuthorsUncheckedCreateInputObjectSchema as tblAuthorsUncheckedCreateInputObjectSchema } from './objects/tblAuthorsUncheckedCreateInput.schema';
import { tblAuthorsUpdateInputObjectSchema as tblAuthorsUpdateInputObjectSchema } from './objects/tblAuthorsUpdateInput.schema';
import { tblAuthorsUncheckedUpdateInputObjectSchema as tblAuthorsUncheckedUpdateInputObjectSchema } from './objects/tblAuthorsUncheckedUpdateInput.schema';

export const tblAuthorsUpsertOneSchema: z.ZodType<Prisma.tblAuthorsUpsertArgs> = z.object({ select: tblAuthorsSelectObjectSchema.optional(), include: tblAuthorsIncludeObjectSchema.optional(), where: tblAuthorsWhereUniqueInputObjectSchema, create: z.union([ tblAuthorsCreateInputObjectSchema, tblAuthorsUncheckedCreateInputObjectSchema ]), update: z.union([ tblAuthorsUpdateInputObjectSchema, tblAuthorsUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.tblAuthorsUpsertArgs>;

export const tblAuthorsUpsertOneZodSchema = z.object({ select: tblAuthorsSelectObjectSchema.optional(), include: tblAuthorsIncludeObjectSchema.optional(), where: tblAuthorsWhereUniqueInputObjectSchema, create: z.union([ tblAuthorsCreateInputObjectSchema, tblAuthorsUncheckedCreateInputObjectSchema ]), update: z.union([ tblAuthorsUpdateInputObjectSchema, tblAuthorsUncheckedUpdateInputObjectSchema ]) }).strict();