import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblCustUsersSelectObjectSchema as tblCustUsersSelectObjectSchema } from './objects/tblCustUsersSelect.schema';
import { tblCustUsersIncludeObjectSchema as tblCustUsersIncludeObjectSchema } from './objects/tblCustUsersInclude.schema';
import { tblCustUsersWhereUniqueInputObjectSchema as tblCustUsersWhereUniqueInputObjectSchema } from './objects/tblCustUsersWhereUniqueInput.schema';
import { tblCustUsersCreateInputObjectSchema as tblCustUsersCreateInputObjectSchema } from './objects/tblCustUsersCreateInput.schema';
import { tblCustUsersUncheckedCreateInputObjectSchema as tblCustUsersUncheckedCreateInputObjectSchema } from './objects/tblCustUsersUncheckedCreateInput.schema';
import { tblCustUsersUpdateInputObjectSchema as tblCustUsersUpdateInputObjectSchema } from './objects/tblCustUsersUpdateInput.schema';
import { tblCustUsersUncheckedUpdateInputObjectSchema as tblCustUsersUncheckedUpdateInputObjectSchema } from './objects/tblCustUsersUncheckedUpdateInput.schema';

export const tblCustUsersUpsertOneSchema: z.ZodType<Prisma.tblCustUsersUpsertArgs> = z.object({ select: tblCustUsersSelectObjectSchema.optional(), include: tblCustUsersIncludeObjectSchema.optional(), where: tblCustUsersWhereUniqueInputObjectSchema, create: z.union([ tblCustUsersCreateInputObjectSchema, tblCustUsersUncheckedCreateInputObjectSchema ]), update: z.union([ tblCustUsersUpdateInputObjectSchema, tblCustUsersUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.tblCustUsersUpsertArgs>;

export const tblCustUsersUpsertOneZodSchema = z.object({ select: tblCustUsersSelectObjectSchema.optional(), include: tblCustUsersIncludeObjectSchema.optional(), where: tblCustUsersWhereUniqueInputObjectSchema, create: z.union([ tblCustUsersCreateInputObjectSchema, tblCustUsersUncheckedCreateInputObjectSchema ]), update: z.union([ tblCustUsersUpdateInputObjectSchema, tblCustUsersUncheckedUpdateInputObjectSchema ]) }).strict();