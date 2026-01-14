import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblCustUsersSelectObjectSchema as tblCustUsersSelectObjectSchema } from './objects/tblCustUsersSelect.schema';
import { tblCustUsersIncludeObjectSchema as tblCustUsersIncludeObjectSchema } from './objects/tblCustUsersInclude.schema';
import { tblCustUsersWhereUniqueInputObjectSchema as tblCustUsersWhereUniqueInputObjectSchema } from './objects/tblCustUsersWhereUniqueInput.schema';

export const tblCustUsersFindUniqueOrThrowSchema: z.ZodType<Prisma.tblCustUsersFindUniqueOrThrowArgs> = z.object({ select: tblCustUsersSelectObjectSchema.optional(), include: tblCustUsersIncludeObjectSchema.optional(), where: tblCustUsersWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblCustUsersFindUniqueOrThrowArgs>;

export const tblCustUsersFindUniqueOrThrowZodSchema = z.object({ select: tblCustUsersSelectObjectSchema.optional(), include: tblCustUsersIncludeObjectSchema.optional(), where: tblCustUsersWhereUniqueInputObjectSchema }).strict();