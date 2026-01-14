import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictLanguagesCreateWithoutDictArticlesInputObjectSchema as dictLanguagesCreateWithoutDictArticlesInputObjectSchema } from './dictLanguagesCreateWithoutDictArticlesInput.schema';
import { dictLanguagesUncheckedCreateWithoutDictArticlesInputObjectSchema as dictLanguagesUncheckedCreateWithoutDictArticlesInputObjectSchema } from './dictLanguagesUncheckedCreateWithoutDictArticlesInput.schema';
import { dictLanguagesCreateOrConnectWithoutDictArticlesInputObjectSchema as dictLanguagesCreateOrConnectWithoutDictArticlesInputObjectSchema } from './dictLanguagesCreateOrConnectWithoutDictArticlesInput.schema';
import { dictLanguagesUpsertWithoutDictArticlesInputObjectSchema as dictLanguagesUpsertWithoutDictArticlesInputObjectSchema } from './dictLanguagesUpsertWithoutDictArticlesInput.schema';
import { dictLanguagesWhereInputObjectSchema as dictLanguagesWhereInputObjectSchema } from './dictLanguagesWhereInput.schema';
import { dictLanguagesWhereUniqueInputObjectSchema as dictLanguagesWhereUniqueInputObjectSchema } from './dictLanguagesWhereUniqueInput.schema';
import { dictLanguagesUpdateToOneWithWhereWithoutDictArticlesInputObjectSchema as dictLanguagesUpdateToOneWithWhereWithoutDictArticlesInputObjectSchema } from './dictLanguagesUpdateToOneWithWhereWithoutDictArticlesInput.schema';
import { dictLanguagesUpdateWithoutDictArticlesInputObjectSchema as dictLanguagesUpdateWithoutDictArticlesInputObjectSchema } from './dictLanguagesUpdateWithoutDictArticlesInput.schema';
import { dictLanguagesUncheckedUpdateWithoutDictArticlesInputObjectSchema as dictLanguagesUncheckedUpdateWithoutDictArticlesInputObjectSchema } from './dictLanguagesUncheckedUpdateWithoutDictArticlesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => dictLanguagesCreateWithoutDictArticlesInputObjectSchema), z.lazy(() => dictLanguagesUncheckedCreateWithoutDictArticlesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => dictLanguagesCreateOrConnectWithoutDictArticlesInputObjectSchema).optional(),
  upsert: z.lazy(() => dictLanguagesUpsertWithoutDictArticlesInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => dictLanguagesWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => dictLanguagesWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => dictLanguagesWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => dictLanguagesUpdateToOneWithWhereWithoutDictArticlesInputObjectSchema), z.lazy(() => dictLanguagesUpdateWithoutDictArticlesInputObjectSchema), z.lazy(() => dictLanguagesUncheckedUpdateWithoutDictArticlesInputObjectSchema)]).optional()
}).strict();
export const dictLanguagesUpdateOneWithoutDictArticlesNestedInputObjectSchema: z.ZodType<Prisma.dictLanguagesUpdateOneWithoutDictArticlesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.dictLanguagesUpdateOneWithoutDictArticlesNestedInput>;
export const dictLanguagesUpdateOneWithoutDictArticlesNestedInputObjectZodSchema = makeSchema();
