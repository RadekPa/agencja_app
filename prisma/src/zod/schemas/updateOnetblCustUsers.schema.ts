import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblCustUsersSelectObjectSchema as tblCustUsersSelectObjectSchema } from './objects/tblCustUsersSelect.schema';
import { tblCustUsersIncludeObjectSchema as tblCustUsersIncludeObjectSchema } from './objects/tblCustUsersInclude.schema';
import { tblCustUsersUpdateInputObjectSchema as tblCustUsersUpdateInputObjectSchema } from './objects/tblCustUsersUpdateInput.schema';
import { tblCustUsersUncheckedUpdateInputObjectSchema as tblCustUsersUncheckedUpdateInputObjectSchema } from './objects/tblCustUsersUncheckedUpdateInput.schema';
import { tblCustUsersWhereUniqueInputObjectSchema as tblCustUsersWhereUniqueInputObjectSchema } from './objects/tblCustUsersWhereUniqueInput.schema';

export const tblCustUsersUpdateOneSchema: z.ZodType<Prisma.tblCustUsersUpdateArgs> = z.object({ select: tblCustUsersSelectObjectSchema.optional(), include: tblCustUsersIncludeObjectSchema.optional(), data: z.union([tblCustUsersUpdateInputObjectSchema, tblCustUsersUncheckedUpdateInputObjectSchema]), where: tblCustUsersWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblCustUsersUpdateArgs>;

export const tblCustUsersUpdateOneZodSchema = z.object({ select: tblCustUsersSelectObjectSchema.optional(), include: tblCustUsersIncludeObjectSchema.optional(), data: z.union([tblCustUsersUpdateInputObjectSchema, tblCustUsersUncheckedUpdateInputObjectSchema]), where: tblCustUsersWhereUniqueInputObjectSchema }).strict();