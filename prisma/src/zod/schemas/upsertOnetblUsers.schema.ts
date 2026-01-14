import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblUsersSelectObjectSchema as tblUsersSelectObjectSchema } from './objects/tblUsersSelect.schema';
import { tblUsersIncludeObjectSchema as tblUsersIncludeObjectSchema } from './objects/tblUsersInclude.schema';
import { tblUsersWhereUniqueInputObjectSchema as tblUsersWhereUniqueInputObjectSchema } from './objects/tblUsersWhereUniqueInput.schema';
import { tblUsersCreateInputObjectSchema as tblUsersCreateInputObjectSchema } from './objects/tblUsersCreateInput.schema';
import { tblUsersUncheckedCreateInputObjectSchema as tblUsersUncheckedCreateInputObjectSchema } from './objects/tblUsersUncheckedCreateInput.schema';
import { tblUsersUpdateInputObjectSchema as tblUsersUpdateInputObjectSchema } from './objects/tblUsersUpdateInput.schema';
import { tblUsersUncheckedUpdateInputObjectSchema as tblUsersUncheckedUpdateInputObjectSchema } from './objects/tblUsersUncheckedUpdateInput.schema';

export const tblUsersUpsertOneSchema: z.ZodType<Prisma.tblUsersUpsertArgs> = z.object({ select: tblUsersSelectObjectSchema.optional(), include: tblUsersIncludeObjectSchema.optional(), where: tblUsersWhereUniqueInputObjectSchema, create: z.union([ tblUsersCreateInputObjectSchema, tblUsersUncheckedCreateInputObjectSchema ]), update: z.union([ tblUsersUpdateInputObjectSchema, tblUsersUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.tblUsersUpsertArgs>;

export const tblUsersUpsertOneZodSchema = z.object({ select: tblUsersSelectObjectSchema.optional(), include: tblUsersIncludeObjectSchema.optional(), where: tblUsersWhereUniqueInputObjectSchema, create: z.union([ tblUsersCreateInputObjectSchema, tblUsersUncheckedCreateInputObjectSchema ]), update: z.union([ tblUsersUpdateInputObjectSchema, tblUsersUncheckedUpdateInputObjectSchema ]) }).strict();